import Header from "./Header";

interface Content {
  titulo?: string | undefined;
  notifications?: string;
  children?: any;
}

export default function Content(props: Content) {
  return (
    <section className="w-11/12 h-screen relative">
      {props.children}
    </section>
  )
}