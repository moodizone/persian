"use client";
import * as React from "react";
import { InferType } from "yup";
import { Controller, Resolver, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Card from "@/components/Card";
import Button from "@/components/Form/button";
import Input from "@/components/Form/input";
import User from "@/components/SVGR/User";
import Label from "@/components/Form/label";
import Envelop from "@/components/SVGR/Envelop";
import Phone from "@/components/SVGR/Phone";
import Textarea from "@/components/Form/textarea";
import CheckboxGroup from "@/components/Form/checkbox";
import { formSchema } from "@/validations/campaings";

type FormValues = InferType<typeof formSchema>;
const defaultValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  service: [],
  message: "",
};

const options = [
  { value: "SEO", label: "خدمات سئو " },
  { value: "Design", label: "طراحی وب سایت" },
  { value: "Marketing", label: "اتوماسیون و بازاریابی" },
  { value: "Campaigns", label: "کمپین‌های بازاریابی و تبلیغاتی" },
  { value: "Content", label: "خدمات تولید محتوا" },
];

function Form() {
  //================================
  // Init
  //================================
  const nameId = React.useId();
  const emailId = React.useId();
  const phoneId = React.useId();
  const messageId = React.useId();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema) as Resolver<FormValues>,
    mode: "onTouched",
    defaultValues,
  });

  //================================
  // Handlers
  //================================
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form data:", data);
  };

  //================================
  // Render
  //================================
  return (
    <section className="bg-concrete flex flex-col px-6 py-10 md:pt-15 md:pb-10">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        <h2 className="font-bold text-cod-gray text-[18px] text-center mb-4 d:text-[32px] md:leading-[1.5]">
          {"فرم دریافت مشاوره"}
        </h2>

        <h3 className="text-center text-shadow-mine-shaft text-[14px] mb-8 md:mb-4">
          {
            "برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید ؟ فرم زیر را تکمیل کنید تا مشاوران ما به صورت کاملان رایگان شمارا راهنمایی کنند."
          }
        </h3>
      </div>
      <Card>
        <form
          className="flex flex-col items-center"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-10 md:mb-8">
            <div>
              <Label htmlFor={nameId} className="mb-2 md:mb-3">
                {"نام و نام خانوادگی خود را وارد کنید"}
              </Label>
              <Input
                {...register("name")}
                id={nameId}
                placeholder="نام و نام خانوادگی"
                type="text"
                inputMode="text"
                icon={<User />}
                error={errors.name?.message}
              />
            </div>
            <div>
              <Label htmlFor={emailId} className="mb-2 md:mb-3">
                {"آدرس ایمیل خود را وارد کنید"}
              </Label>
              <Input
                {...register("email")}
                id={emailId}
                inputMode="email"
                placeholder="email address@mail.com"
                type="email"
                icon={<Envelop />}
                error={errors.email?.message}
              />
            </div>
            <div>
              <Label htmlFor={phoneId} className="mb-2 md:mb-3">
                {"شماره تماس خود را وارد کنید"}
              </Label>
              <Input
                {...register("phone")}
                id={phoneId}
                inputMode="tel"
                placeholder="021-123456789"
                type="text"
                icon={<Phone />}
                error={errors.phone?.message}
              />
            </div>
          </div>
          <div className="w-full mb-10 md:mb-8">
            <Controller
              control={control}
              name="service"
              render={({ field }) => (
                <CheckboxGroup
                  name="service"
                  options={options}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.service && (
              <p className="mt-1 text-sm text-red-600">
                {errors.service.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full mb-4">
            <Label htmlFor={messageId} className="mb-2 md:mb-3">
              {"در مورد درخواست خود برای ما بنویسید."}
            </Label>
            <Textarea
              {...register("message")}
              id={messageId}
              inputMode="text"
              placeholder="توضیحات (اختیاری)"
              rows={4}
              error={errors.message?.message}
            />
          </div>
          <Button
            type="submit"
            className="text-white w-full bg-mine-shaft rounded-lg md:rounded-2xl max-w-[380px] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            {"ثبت درخواست"}
          </Button>
        </form>
      </Card>
    </section>
  );
}

export default Form;
