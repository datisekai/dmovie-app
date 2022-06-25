import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";
import { IMAGE_500 } from "../config";
import TrendCard from "../models/TrendCard";
import { primary } from "../theme/theme";
import FlexBox from "./FlexBox";

const HomeCard: FC<TrendCard> = ({ image, title, id, vote, media_type }) => {
  const router = useRouter();
  return (
    <Box sx={{ position: "relative" }}>
      <img
        onClick={() =>
          router.push(`/${media_type === "movie" ? "movie" : "tv-show"}/${id}`)
        }
        src={`${IMAGE_500}${image}`}
        id='homeCard'
        alt=''
      />

      <FlexBox alignItems={"center"} justifyContent='space-between'>
        <Typography sx={{ flex: 1 }} fontWeight='500'>
          {title}
        </Typography>
        <Typography
          sx={{
            px: "10px",
            bgcolor: primary.main,
            borderRadius: "8px",
            color: "white",
          }}
        >
          {Number(vote).toFixed(1)}
        </Typography>
      </FlexBox>
    </Box>
  );
};

export default HomeCard;
