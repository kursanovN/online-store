import React from "react";
import { ProductLayout } from "./ProductLayout";
import { UserHeader } from "./UserHeader";

export const UserLayout = () => {
  return (
    <div>
      <UserHeader />

      <main>
        <ProductLayout />
      </main>
    </div>
  );
};
