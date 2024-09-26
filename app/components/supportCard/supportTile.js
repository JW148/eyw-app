export default function SupportTile({ content }) {
  return (
    <div className=" border-1 p-8 justify-center align-middle m-2">
      <p>{content?.title}</p>
    </div>
  );
}
