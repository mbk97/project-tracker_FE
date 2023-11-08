import { CircularProgress } from "@mui/material";
import useUserData from "hooks/user";
import { Suspense, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  Component: React.ReactNode;
}

const Protected: React.FC<Props> = ({ Component }: Props) => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const auth = useUserData();
  useEffect(() => {
    if (auth) {
      setUser(true);
    } else {
      navigate("/");
    }
  }, [auth, navigate]);

  return user ? (
    <Suspense fallback={<CircularProgress />}>
      <>{Component}</>
    </Suspense>
  ) : null;
};

export default Protected;
