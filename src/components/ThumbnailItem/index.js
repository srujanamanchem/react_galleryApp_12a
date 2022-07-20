import './index.css'

const ThumbnailItem = props => {
  const {eachItem, updateImageUrl, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachItem
  const selectImage = () => {
    updateImageUrl(id)
  }
  const thumbnailClassName = isActive
    ? `thumbnail-image active`
    : `thumbnail-images`
  return (
    <li className="thumbnails">
      <button className="thumbnail-button" type="button" onClick={selectImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
