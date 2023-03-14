import React from "react";
import style from "./intelsenseai.module.scss";

export default function IntelsenseAI() {
  return (
    <div className={style.IntelsenseAI_a_cover}>
      <img className={style.IntelsenseAI_a_cover_image} src="/images/aspiringLeaders.png" alt="" />
      <div className={style.IntelsenseAI_a_cover_info}>
        <div className="m-auto">
        <p className={style.IntelsenseAI_a_cover_info_title}>An aspiring leader</p>
        <p className={style.IntelsenseAI_a_cover_info_subtitle}>In machine translation, natural language processing and automated speech recognition technologies using artificial intelligence</p>
        </div>
      </div>
    </div>
  );
}
