import React, { Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "antd";

export default function InputDemo() {
  const { handleSubmit, control, formState, register } = useForm({
    mode: "onChange",
  }); // mode 触发时机
  //   onBlur: "onBlur";
  //   onChange: "onChange";
  //   onSubmit: "onSubmit";
  //   onTouched: "onTouched";
  //   all: "all";
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => {
    console.log("err");
    console.log(errors, e);
  };
  return (
    <Fragment>
      {/* <form onSubmit={handleSubmit(onSubmit, onError)}> */}
      <input {...register(`firstName`, { required: "firstName 必填" })} />
      {formState.errors.firstName ? (
        <span>firstName: {formState.errors.firstName.message}</span>
      ) : null}
      <br />
      <Controller
        name="lastName"
        defaultValue=""
        control={control}
        rules={{ required: "lastName 必填" }}
        render={({ field }) => <Input style={{ width: 110 }} {...field} />}
      />
      {formState.errors.lastName ? (
        <span>lastName: {formState.errors.lastName.message}</span>
      ) : null}
      <br/>
      <button type="submit" onClick={handleSubmit(onSubmit, onError)}>
        Submit
      </button>
      {/* </form> */}
    </Fragment>
  );
}
