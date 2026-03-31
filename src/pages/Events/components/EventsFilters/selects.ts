import { WeaponsOptions } from "constants/Weapons";
import { GenderOptions } from "constants/Gender";
import { AgeOptions } from "constants/Age";

export default [
   {
      name: "region" as const,
      label: "Регион",
      style: { flex: "0 0 217px" },
      options: [{ value: "", label: "Любой" }]
   },
   {
      name: "weapon" as const,
      label: "Оружие",
      style: { flex: "0 0 160px" },
      options: WeaponsOptions
   },
   {
      name: "gender" as const,
      label: "Пол",
      style: { flex: "0 0 160px" },
      options: GenderOptions
   },
   {
      name: "age" as const,
      label: "Возраст",
      style: { flex: "0 0 160px" },
      options: AgeOptions
   },
   {
      name: "category" as const,
      label: "Платно\\бесплатно",
      style: { flex: "0 0 160px" },
      options: [
         { value: "", label: "Любое" },
         { value: "true", label: "Платно" },
         { value: "false", label: "Бесплатно" }
      ]
   }
]