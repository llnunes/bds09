import { Role } from "../../util/auth";

type Props = {
  children: React.ReactNode;
  path: string;
  roles?: Role[];
};

const PrivateRoute = ({ children, path, roles = [] }: Props) => {
  return (
    <h1>Teste</h1>
  );
};

export default PrivateRoute;
