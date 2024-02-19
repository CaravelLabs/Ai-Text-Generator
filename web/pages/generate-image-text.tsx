// GenerateImageTextPage.tsx

import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const GenerateImageTextPage: NextPage = () => {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");

  const handleGenerateText = () => {
    // Navigate to the desired URL
    router.push(`/api/generate?imageUrl=${encodeURIComponent(imageUrl)}`);
  };

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Generate Image Text</h1>
      {/* Add your form to input the link of the picture */}
      <form onSubmit={(e) => { e.preventDefault(); handleGenerateText(); }}>
        <label>
          Link of the Picture:
          <input type="text" name="imageUrl" value={imageUrl} onChange={handleImageUrlChange} />
        </label>
        {/* Use type="button" to prevent form submission */}
        <button type="button" onClick={handleGenerateText}>Generate Text</button>
      </form>
    </div>
  );
};

export default GenerateImageTextPage;
