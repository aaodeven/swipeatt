import React from "react";
import "../styles/Count.css";
import ResultAnalyse from "./ResultAnalyse";
import { RESULT_TEXT } from "../../constants/text";
import { data } from "./data";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Counting = () => {
  const isDislike = data.total_result.dislikes === data.total_result.dislikes;
  const numberOfLikes = parseInt(data.last_result.numberOfLikes);
  const numberOfDislikes = parseInt(data.last_result.numberOfDislikes);
  const actionProducts = parseInt(data.last_result.actionProducts);
  const actionShops = parseInt(data.last_result.actionShops);
  const newSubscribes = parseInt(data.last_result.newSubscribes);

  const arrowIconDislikes = isDislike ? (
    <ArrowForwardIcon />
  ) : (
    <ArrowUpwardIcon />
  );
  const iconColorDislikes = isDislike
    ? "rgba(235, 119, 54, 1)"
    : "rgba(73, 185, 45, 1)";

  const handleIcons = (number) => {
    return number < 5 ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />;
  };

  const handleColors = (number) => {
    return number < 5 ? "rgba(235, 119, 54, 1)" : "rgba(73, 185, 45, 1)";
  };

  return (
    <div className="countContainer" >
      <ResultAnalyse
        result={data.total_result.likes}
        result_description={RESULT_TEXT.likeText}
        icon={handleIcons(numberOfLikes)}
        iconColor={handleColors(numberOfLikes)}
        numberof_event={data.last_result.numberOfLikes}
        period={RESULT_TEXT.periode}
      />

      <ResultAnalyse
        result={data.total_result.dislikes}
        result_description={RESULT_TEXT.dislikeText}
        icon={arrowIconDislikes}
        numberof_event={data.last_result.numberOfDislikes}
        period={RESULT_TEXT.periode}
        iconColor={iconColorDislikes}
      />
      <ResultAnalyse
        result={data.total_result.subscrips}
        result_description={RESULT_TEXT.subscribe}
        icon={handleIcons(newSubscribes)}
        iconColor={handleColors(newSubscribes)}
        numberof_event={data.last_result.newSubscribes}
        period={RESULT_TEXT.periode}
      />
      <ResultAnalyse
        result={data.total_result.actions_product}
        result_description={RESULT_TEXT.produit}
        icon={handleIcons(actionProducts)}
        iconColor={handleColors(actionProducts)}
        numberof_event={data.last_result.actionProducts}
        period={RESULT_TEXT.periode}
      />
      <ResultAnalyse
        result={data.total_result.actions_shop}
        result_description={RESULT_TEXT.boutique}
        icon={handleIcons(actionShops)}
        iconColor={handleColors(actionShops)}
        numberof_event={data.last_result.actionShops}
        period={RESULT_TEXT.periode}
      />
    </div>
  );
};

export default Counting;
