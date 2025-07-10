'use client'
import React,{useEffect, useState} from 'react'
import Image from 'next/image'


function ImageFetch() {
   
   const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?limit=6')
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      })
      .catch((err) => console.error('Error fetching images:', err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {images.map((img) => (
        <div key={img.id} className="rounded-lg shadow-md overflow-hidden">
          <Image src={`https://picsum.photos/id/${img.id}/400/300`} alt={img.author} height={400} width={400} />
        </div>
      ))}
    </div>
  );
}

export default ImageFetch