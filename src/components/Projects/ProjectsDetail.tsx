"use client";

import ServicesCards from "../Cards/ServicesCard";
import { motion, Variants, Transition } from "framer-motion";
import Image from "next/image";
import loginImg from "@/assets/login-hotel.png";
import registerHotelImg from "@/assets/register-hotel.png";
import homeHotemImg from "@/assets/home-hotel.png";
import profileHotelImg from "@/assets/profile-hotel.png";
import hotelDetailsImg from "@/assets/hotel-detais.png";
import { Swiper, SwiperSlide } from "swiper/react";

const cardTransition: Transition = {
  duration: 0.6,
  ease: [0.6, 0.01, 0.05, 0.9],
};

const containerVariants: Variants = {
  hidden: { opacity: 1, y: 20 },
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: cardTransition },
};

const ProjectsDetails = () => {
  return (
    <section className="w-full h-auto mt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="max-w-7xl mx-auto py-30"
      >
        <ServicesCards className="p-20 flex flex-col h-auto">
          <motion.div variants={cardVariant} className="mb-4">
            <h1 className="text-center text-3xl font-bold text-primary mb-10">
              Hotel DNC
            </h1>
            <p className="text-center text-secondary opacity-90 mt-4 mb-10">
              Sistema de reservas de hotéis completo com autenticação, painel
              admin e usuário, sistema escalável, com api RESTful e banco de
              dados relacional.
            </p>
          </motion.div>
          <motion.div
            variants={cardVariant}
            className="h-auto mb-4"
          >
            <Swiper
              className="w- full"
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                1024: { slidesPerView: 1 },
              }}
            >
              <SwiperSlide>
                <div className="relative w-full h-[600px]">
                  <Image
                    src={loginImg}
                    alt="login"
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full h-[600px]">
                  <Image
                    src={registerHotelImg}
                    alt="register"
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full h-[600px]">
                  <Image
                    src={homeHotemImg}
                    alt="home"
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full h-[600px]">
                  <Image
                    src={profileHotelImg}
                    alt="profile"
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full h-[600px]">
                  <Image
                    src={hotelDetailsImg}
                    alt="details"
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </ServicesCards>
      </motion.div>
    </section>
  );
};

export default ProjectsDetails;
