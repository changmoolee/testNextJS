import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ id }) {
  const router = useRouter();

  const [title, movieId] = id || [];

  console.log(router.query);
  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { id } }) {
  // 서버 사이드 자체에 존재하는 속성 params임 / url 정보를 가져왔음.
  console.log(id);
  return {
    props: {
      id,
    },
  };
}
