"use client"
import { Button } from 'react-bootstrap';
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
    const { pending } = useFormStatus()

  return <Button disabled={pending} type="submit" className="w-100" variant="primary">
  {pending ? "Submitting..." : "Submit"}
</Button>;
};

export default SubmitButton;
