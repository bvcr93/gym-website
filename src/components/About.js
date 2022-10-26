import React from "react";
import GymPic from "../assets/gym.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about" style={{ backgroundImage: `url(${GymPic})` }}>
      <div className="about-top">
        <h2>ABOUT US</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quasi
          maxime blanditiis libero nobis unde explicabo quia natus perspiciatis,
          dignissimos illum culpa totam perferendis esse numquam similique
          molestias. Voluptatem minima delectus at fugit nostrum libero
          dignissimos magnam ut sed unde dolorem ab hic iste commodi vel
          molestias ex, maiores nobis nihil ipsam eligendi quas! Exercitationem
          alias nisi in velit iste temporibus totam dolore beatae quidem,
          quisquam reprehenderit dolores. Labore dolorum aspernatur consequatur
          iste explicabo. Officiis ut maiores, veritatis eaque pariatur fugit
          eveniet repellendus magni, suscipit dolor, dolores at corrupti officia
          doloribus perferendis perspiciatis enim cum porro nostrum dicta nulla
          et!
        </p>
      </div>
    </div>
  );
};

export default About;
