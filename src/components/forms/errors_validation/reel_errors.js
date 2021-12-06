export default function errorHandle(errors) {
  return {
    email() {
      return errors.email && <div>{errors.email}</div>;
    },

    name() {
      return errors.name && <div>{errors.name}</div>;
    },
    age() {
      return errors.age && <div>{errors.age}</div>;
    },
    role() {
      return errors.role && <div>{errors.role}</div>;
    }
  };
}
