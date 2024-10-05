import { Suspense, useState } from "react";
import { CardContainer, InfoContainer } from "./styles";
import { Skeleton } from "antd";
import { PokemonInfo } from "../PokemonInfo";

interface PokemonCardProps {
  name: string;
  url: string;
}

export function PokemonCard({ name, url }: PokemonCardProps) {
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  function openPokemonInfo() {
    setIsInfoOpen(true);
  }

  function closePokemonInfo() {
    setIsInfoOpen(false);
  }

  const urlParts = url.split("/");
  const pokemonId = urlParts[urlParts.length - 2];
  const displayId = `#${pokemonId.padStart(3, "0")}`;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <>
      <CardContainer onClick={openPokemonInfo} hoverable title={displayId}>
        <Suspense fallback={<Skeleton.Image />}>
          <img src={imageUrl} />
        </Suspense>
        <InfoContainer>
          <p>{name}</p>
        </InfoContainer>
      </CardContainer>
      <PokemonInfo
        isOpen={isInfoOpen}
        close={closePokemonInfo}
        pokemonId={Number(pokemonId)}
        pokemonName={name}
      />
    </>
  );
}
