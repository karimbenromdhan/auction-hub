import { forwardRef } from "react";
import { Input, Label } from "../../atoms";
import { FormFieldProps } from "@/interfaces";

const FormField = forwardRef<HTMLInputElement, FormFieldProps>((props, ref) => {
  const { label, error, required, id, ...restProps } = props;
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="mb-4">
      <Label htmlFor={inputId} required={required}>
        {label}
      </Label>
      <Input ref={ref} id={inputId} error={error} fullWidth {...restProps} />
    </div>
  );
});

FormField.displayName = "FormField";

export default FormField;
