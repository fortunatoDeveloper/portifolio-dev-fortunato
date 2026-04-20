import Button from "../Button/Button";

const Action = () => {
  return (
    <section id="action" className="w-full h-auto">
      <div className="max-w-7xl mx-auto my-auto pt-40">
        <div className="flex flex-col items-center justify-center px-30">
          <h2 className="text-4xl font-bold mb-4 sm:text-center ">
            Vamos criar algo extraordinário juntos?
          </h2>
          <p className="mt-6 text-lg text-center text-secondary px-40 sm:px-10">
            Disponível para novos projetos freelance. Quer levar seu produto
            para o próximo nível? Vamos conversar.
          </p>
          <a href="https://wa.me/5543984851477?text=Ol%C3%A1%2C%20Giovani!%0ATenho%20interesse%20em%20desenvolver%20um%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AA.%20Poderia%20me%20informar%20os%20valores%20e%20as%20op%C3%A7%C3%B5es%20de%20servi%C3%A7o%20dispon%C3%ADveis%3F">
            <Button
              appearance="tertiary"
              className="flex items-center justify-center gap-2 py-2 pr-6 pl-4 mt-8 mb-30"
            >
              <img src="whatsapp.svg" alt="whatsapp-icon" />
              Fale comigo
            </Button>
          </a>
        </div>
        <hr className="h-[2px] bg-main-light-grey border-none mt-20" />
      </div>
    </section>
  );
};

export default Action;
