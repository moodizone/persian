import * as yup from "yup";

export const formSchema = yup.object({
  name: yup.string().required("وارد کردن نام و نام خانوادگی الزامی است."),
  email: yup
    .string()
    .email("ایمیل معتبر نیست")
    .required("وارد کردن ایمیل الزامی است."),
  phone: yup.string().required("شماره تماس الزامی است."),
  service: yup
    .array()
    .of(yup.string().required())
    .min(1, "حداقل یک گزینه را انتخاب کنید")
    .required("انتخاب حداقل یک خدمت الزامی است."),
  message: yup.string().notRequired(),
});
