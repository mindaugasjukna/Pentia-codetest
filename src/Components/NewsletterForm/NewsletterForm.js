import "./NewsletterForm.scss";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const NewsletterSchema = yup.object().shape({
  name: yup.string().required("Indsæt venligst dit navn"),
  mobil: yup
    .string()
    .min(8, "Ikke et gyldigt telefonnummer")
    .max(8, "Ikke et gyldigt telefonnummer")
    .required("Indsæt venligt dit telefonnummer"),
  email: yup
    .string()
    .email("Dette er ikke et gyldigt e-mail")
    .required("Indsæt venligt dit e-mail"),
  postnummer: yup.string().required("Indsæt venligst dit postnummer"),
  by: yup.string().required("Indsæt venligst din by"),
});

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(NewsletterSchema),
  });

  return (
    <form
      className="NewsletterForm"
      onSubmit={handleSubmit((d) => console.log(d))}
    >
      <div className="NewsletterForm--single">
        <input {...register("name")} placeholder="Navn" />
        {errors.name?.message && <p>{errors.name?.message}</p>}
      </div>

      <div className="NewsletterForm--grid">
        <div>
          <input {...register("mobil")} placeholder="Mobil" />
          {errors.mobil?.message && <p>{errors.mobil?.message}</p>}
        </div>

        <div>
          <input {...register("email")} placeholder="E-mail" />
          {errors.email?.message && <p>{errors.email?.message}</p>}
        </div>
      </div>

      <div className="NewsletterForm--grid">
        <div>
          <input {...register("postnummer")} placeholder="Postnr" />
          {errors.postnummer?.message && <p>{errors.postnummer?.message}</p>}
        </div>

        <div>
          <input {...register("by")} placeholder="By" />
          {errors.by?.message && <p>{errors.by?.message}</p>}
        </div>
      </div>

      <button type="submit">
        <h3>Ring mig op</h3>
      </button>
    </form>
  );
}
