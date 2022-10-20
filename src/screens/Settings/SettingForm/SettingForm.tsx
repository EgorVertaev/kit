import React from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

import { Select } from "antd";

interface Iadress {
  city: string;
  street: string;
  house: string;
  flat: string;
}

interface IMainFields {
  firstName: string;
  lastName: string;
  sex: string;
  email: string;
  phone: string;
}

export const SettingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, //? сброс всех полей в форме
    // resetField, //? сбросс конкретного поля
    // getValues, //? получает конкретное значение поля
    // getFieldState, //? получает состояние поля
    control,
  } = useForm<IMainFields>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IMainFields> = (data) => {
    console.log("email", data.email);
    console.log("first Name", data.firstName);
    console.log("last Name", data.lastName);
    console.log("sex", data.sex);
    console.log("phone", data.phone);
    reset();
  };

  const { Option } = Select;
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label style={{ display: "block" }}>First Name</label>
      <input
        {...register("firstName", {
          required: "Name is required",
        })}
        type="text"
        placeholder="FirstName"
      />
      {errors.firstName && (
        <div style={{ color: "red" }}>{errors.firstName.message}</div>
      )}

      <label style={{ display: "block" }}> Email</label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: "please enter valid email",
          },
        })}
        type="text"
        placeholder="Email"
      />
      {errors.email && (
        <div style={{ color: "red" }}>{errors.email.message}</div>
      )}


      <div>
        <Controller
          control={control}
          name="sex"
          rules={{
            required: "this field required!",
          }}
          render={({ field: { onChange } }) => (
            <Select
              defaultValue="sex"
              style={{ width: 120 }}
              onChange={onChange}
            >
              <Option value="man">Man</Option>
              <Option value="woman">Woman</Option>
            </Select>
          )}
        />
      </div>

      {errors.sex && <div style={{ color: "red" }}>{errors.sex.message}</div>}

      <div></div>
      <div className="">
        <button>send</button>
      </div>
    </form>
  );
};
