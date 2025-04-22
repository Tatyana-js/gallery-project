import styles from './Gallery.module.scss';
import { useGetPaintingsQuery, useGetAuthorsQuery, useGetLocationsQuery } from '../../api/apiGallery';
import { useEffect } from 'react';

const GalleryList = () => {
  const { data: paintings = [], error:  paintingsError} =  useGetPaintingsQuery();
  const { data: authors = [] } = useGetAuthorsQuery();
  const  { data: locations = [] } = useGetLocationsQuery();

  useEffect(() => {
    if (paintingsError) {
      console.error(paintingsError);
    }
  }, [paintingsError]);

  return (
    <div className={styles.galleryList}>
      {paintings.map((item) => (
        <div key={item.id} className={styles.painting}>
          <img src={`${item.imageUrl}`} alt={item.name} />
          <div className={styles.container}>
            <div className={styles.line}></div>
            <div className={styles.firstInfo}>
              <p>{item.name}</p>
              <p className={styles.created}>{item.created}</p> 
            </div>
            <div className={styles.secondInfo}>
              <p>{authors.find((author) => author.id === item.authorId)?.name}</p>
              <p className={styles.created}>{locations.find((location) => location.id === item.id)?.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryList;