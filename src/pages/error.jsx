import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";
export default function ErrorPage() {
  const error = useRouteError();
  console.error("AAAAAAAAAAAA", error);
  return (
    <Result
      status="404"
      title="Oops"
      subTitle={error.message || error.toString}
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  );
}
