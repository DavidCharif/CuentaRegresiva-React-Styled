import React, { useEffect, useState } from "react";
import { ContenedorDatos, Flex, TimeContainer } from "../styled/styles";

const Contador = () => {

  const calculateTimeLeft = () => {

    // let year = new Date().getFullYear();

    let difference = +new Date(`03/03/2022`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  const {days, hours, minutes, seconds} = timeLeft
  return (
    <ContenedorDatos>
      <Flex>
        <TimeContainer>{days}</TimeContainer>
        <p>DAYS</p>
      </Flex>
      <Flex>
        <TimeContainer>{hours}</TimeContainer>
        <p>HOURS</p>
      </Flex>
      <Flex>
        <TimeContainer>{minutes}</TimeContainer>
        <p>MINUTES</p>
      </Flex>
      <Flex>
        <TimeContainer>{seconds}</TimeContainer>
        <p>SECONDS</p>
      </Flex>
    </ContenedorDatos>
  );
};

export default Contador;
