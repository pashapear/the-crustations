import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Form({ _id }) {
  const [formData, setFormData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = async data => {
    setIsSubmitting(true)
    let response
    setFormData(data)
    try {
      response = await fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json'
      })
      setIsSubmitting(false)
      setHasSubmitted(true)
    } catch (err) {
      setFormData(err)
    }
  }

  if (isSubmitting) {
    return <h3>Submitting comment…</h3>
  }
  if (hasSubmitted) {
    return (
      <>
        <h3>On behalf of all of the crustations, we thank you for your comment!</h3>
        <ul>
          <li>
            Name: {formData.name} <br />
          Email: {formData.email} <br />
          Comment: {formData.comment}
          </li>
        </ul>
      </>)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg" disabled>
      <input ref={register} type="hidden" name="_id" value={_id} />
      <label className="block mb-5">
        <span className="text-gray-700">Name</span>
        <input name="name" ref={register({ required: true })} className="shadow border rounded py-2 px-3 form-input mt-1 block w-full" placeholder="Your Name" />
      </label>
      <label className="block mb-5">
        <span className="text-gray-700">Email</span>
        <input name="email" type="email" ref={register({ required: true })} className="shadow border rounded py-2 px-3 form-input mt-1 block w-full" placeholder="your@email.com" />
      </label>
      <label className="block mb-5">
        <span className="text-gray-700">Comment</span>
        <textarea ref={register({ required: true })} name="comment" className="shadow border rounded py-2 px-3  form-textarea mt-1 block w-full" rows="8" placeholder="Leave us a note"></textarea>
      </label>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" className="primary-button" />
    </form>
  )
}
