export default function Image(props) {
  return (
    <div>
      <img
        src={props.imagePath}
        alt={props.altText}
        width={props.width}
        height={props.height}
      />
    </div>
  );
}
