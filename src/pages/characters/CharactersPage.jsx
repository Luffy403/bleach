import { Helmet } from "react-helmet-async";
import { BackTo } from "../../components/ui/BackTo/backTo";
import { GifBackBiakuia } from "../../components/gifBack/GifBackPhone";
import { CharactersTabs } from "../../components/characters/charactersTabs/CharactersTabs";
import { InfoModal } from "../../components/modal/infoModal/InfoModal";

export function CharactersPage() {
  return (
    <>
      <Helmet>
        <title>Bleach | Персонажи</title>
      </Helmet>
      <GifBackBiakuia />
      <CharactersTabs />
      <BackTo title="Назад" />
      <InfoModal>
        <p className="paragraph">На данной странице присутствуют спойлеры по персонажам и информации по ним. <br />
        Персонажи взяты только с первого и со второго сезона, не учитывая прошлое и отдельных персонажей<br />
        Будьте осторожней. </p>
      </InfoModal>
    </>
  );
}
