import { Button, Typography } from "@mui/material";
import React from "react";
import CountryFlags from "../../helpers/CountryFlags.json";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function FixtureCard({
  data,
  handleModalOpen,
  group,
  fixtures,
}) {
  const navigate = useNavigate();

  /**
   * @dev only list games according to dates
   */
  const getGamesByDate = (date) => {
    var games = [];

    fixtures.forEach((data) => {
      if (moment(data?.DateUtc).format("LL") === date) {
        games.push(data);
      }
    });

    return games;
  };

  const gameTime = (data) => {
    return (
      <div className="gameTime">
        {data.status[0]?.status === "closed" ? (
          <>
            {data.HomeTeamScore} : {data.AwayTeamScore}
          </>
        ) : (
          moment(data?.DateUtc).format("LT")
        )}
      </div>
    );
  };

  const HomeTeamFlag = (d, c, i) => {
    return (
      (c.name === d?.HomeTeam ||
        (c.name === "United States" && d?.HomeTeam === "USA") ||
        (c.name === "South Korea" && d?.HomeTeam === "Korea Republic")) && (
        <img
          src={c.image}
          alt={c.name}
          key={i}
          loading="lazy"
          className="home__Image"
        />
      )
    );
  };

  const AwayTeamFlag = (d, c, i) => {
    return (
      (c.name === d?.AwayTeam ||
        (c.name === "United States" && d?.AwayTeam === "USA") ||
        (c.name === "South Korea" && d?.AwayTeam === "Korea Republic")) && (
        <img
          src={c?.image}
          alt={c.name}
          key={i}
          loading="lazy"
          className="Away__Image"
        />
      )
    );
  };

  return (
    <div className="fixtureCard__container">
      <Typography component={"span"} variant={"h3"}>
        <i className="ri-calendar-line"></i> {data}
      </Typography>

      {getGamesByDate(data)
        .reverse()
        .map((data, index) => {
          console.log(data)
          if (group === "all") {
            return (
              <div className="gameDetails__item" key={index}>
                {window.innerWidth > 576 ? (
                  <div
                    onClick={() => navigate(`/predict/${data?._id}`)}
                    className="gameDetails__teamDetails"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="teamName">{data?.HomeTeam}</div>
                    {CountryFlags.map((country, i) => {
                      return HomeTeamFlag(data, country, i);
                    })}
                    {gameTime(data)}
                    {CountryFlags.map((country, i) => {
                      return AwayTeamFlag(data, country, i);
                    })}
                    <div className="teamName">{data?.AwayTeam}</div>
                  </div>
                ) : (
                  <Button
                    className="gameDetails__teamDetails"
                    onClick={() => navigate(`/predict/${data?._id}`)}
                  >
                    <div className="teamName">{data?.HomeTeam}</div>
                    {CountryFlags.map((country, i) => {
                      return HomeTeamFlag(data, country, i);
                    })}
                    {gameTime(data)}
                    {CountryFlags.map((country, i) => {
                      return AwayTeamFlag(data, country, i);
                    })}
                    <div className="teamName">{data?.AwayTeam}</div>
                  </Button>
                )}

                <div className="gameDetails__location">
                  <i className="ri-map-pin-2-line"></i> {data?.Location}
                </div>

                <div className="gameDetails__action">
                  <Button
                    className="quickView"
                    onClick={() => handleModalOpen(data)}
                  >
                    Quick View
                  </Button>
                  <Button>
                    <i className="ri-arrow-right-line"></i>
                  </Button>
                </div>
              </div>
            );
          } else if (data?.Group === group)
            return (
              <div className="gameDetails__item" key={index}>
                {window.innerWidth > 576 ? (
                  <div
                    className="gameDetails__teamDetails"
                    onClick={() => navigate(`/predict/${data?._id}`)}
                  >
                    <div className="teamName">{data?.HomeTeam}</div>
                    {CountryFlags.map((country, i) => {
                      return HomeTeamFlag(data, country, i);
                    })}
                    {gameTime(data)}
                    {CountryFlags.map((country, i) => {
                      return AwayTeamFlag(data, country, i);
                    })}
                    <div className="teamName">{data?.AwayTeam}</div>
                  </div>
                ) : (
                  <Button
                    className="gameDetails__teamDetails"
                    onClick={() => navigate(`/predict/${data._id}`)}
                  >
                    <div className="teamName">{data?.HomeTeam}</div>
                    {CountryFlags.map((country, i) => {
                      return HomeTeamFlag(data, country, i);
                    })}
                    {gameTime(data)}
                    {CountryFlags.map((country, i) => {
                      return AwayTeamFlag(data, country, i);
                    })}
                    <div className="teamName">{data?.AwayTeam}</div>
                  </Button>
                )}

                <div className="gameDetails__location">
                  <i className="ri-map-pin-2-line"></i> {data?.Location}
                </div>

                <div className="gameDetails__action">
                  <Button
                    className="quickView"
                    onClick={() => handleModalOpen(data)}
                  >
                    Quick View
                  </Button>
                  <Button>
                    <i className="ri-arrow-right-line"></i>
                  </Button>
                </div>
              </div>
            );
        })}
    </div>
  );
}
