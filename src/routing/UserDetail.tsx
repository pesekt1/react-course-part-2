import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  console.log("params: ", params);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams: ", searchParams);
  console.log("searchParams: ", searchParams.toString());
  console.log("searchParams: ", searchParams.get("age"));

  const location = useLocation();
  console.log("location: ", location);

  return <p>User {params.id}</p>;
};

export default UserDetail;
