import * as Yup from "yup";
//tags
import TAGS_VALIDATION_FORM from "../tags_validation/tag_reel";

const Schema = Yup.object().shape({
  email: Yup.string().required(TAGS_VALIDATION_FORM.EMAIL.IS_REQUIRED),
  name: Yup.string().required(TAGS_VALIDATION_FORM.NAME.IS_REQUIRED),
  age: Yup.number().required(TAGS_VALIDATION_FORM.AGE.IS_REQUIRED),
  role: Yup.string().required(TAGS_VALIDATION_FORM.ROLE.IS_REQUIRED)
});

export default Schema;
