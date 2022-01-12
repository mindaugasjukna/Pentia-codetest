import "./ImageHeaderText.scss";

export default function ImageHeaderText({ image, header, text }) {
  return (
    <div className="ImageHeaderText">
      {image && <img src={image} alt={image} />}
      {header && (
        <div className="header">
          <h3>{header}</h3>
        </div>
      )}
      {text && <h5>{text}</h5>}
    </div>
  );
}
