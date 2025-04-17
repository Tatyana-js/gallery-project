import styles from './Gallery.module.scss';
import { useGetPaintingsQuery } from '../../api/apiGallery';
// import { Card } from '../../api/apiGallery';

const GalleryList = () => {
  const { data: paintings = [], error } =  useGetPaintingsQuery();
  const basaUrl = "https://test-front.framework.team/";
  console.log(paintings);

  return (
    <div className={styles.galleryList}>
      {paintings.map((item) => (
        <div key={item.id} className={styles.painting}>
          <img src={`${basaUrl}${item.imageUrl}`} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default GalleryList;