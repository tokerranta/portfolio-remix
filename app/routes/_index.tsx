import Main from "~/components/Main";
import PageTitle from "~/components/PageTitle";

export default function Index() {
  return (
    <Main>
      <PageTitle>Welcome Home</PageTitle>
      <h1 className="text-4xl text-center">I created this site to play around with <a className="text-orange-400 underline" href="https://remix.run/" target="_blank" rel="noreferrer">Remix</a></h1>
    </Main>
  );
}
