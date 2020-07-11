import React from "react";
import ContactCard from "./ContactCard";

function App() {
  return (
    <div>
      <ContactCard
        name="Mr.Whisken"
        imgUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fcat&psig=AOvVaw1L5wYia_QQRI-7poGMi65d&ust=1594570294026000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICxvLHLxeoCFQAAAAAdAAAAABAD"
        phone="(212) 515 - 1234"
      />
      <ContactCard
        name="Fluffykins"
        imgUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theguardian.com%2Fworld%2F2020%2Fapr%2F01%2Fcats-can-infect-each-other-with-coronavirus-chinese-study-finds&psig=AOvVaw1L5wYia_QQRI-7poGMi65d&ust=1594570294026000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICxvLHLxeoCFQAAAAAdAAAAABAI"
        phone="(212) 555 - 2345"
      />
    </div>
  );
}
