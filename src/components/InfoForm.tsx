import React, { useState, ChangeEvent, FormEvent } from 'react';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

interface FormData {
  email: string;
  name: string;
  message: string;
}

const InfoForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    message: '',
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert(
      `FormSubmitted:\nName:${formData.name}\nEmail:${formData.email}\nMessage:${formData.message}`
    );
    setFormData({
    email: '',
    name: '',
    message: '',
  })
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md p-4 rounded-md shadow-md bg-white space-y-4 m-4 "
    >
      <div className="flex items-center justify-between">
        <div>
          <CallIcon style={{ color: 'black' }} />
          <span className="text-black pl-2">+91 7639569973</span>
        </div>
        <div>
          <MailIcon style={{ color: 'black' }} />
          <span className="text-black pl-2">prince227@gmail.com</span>
        </div>
      </div>
      <div>
        <label htmlFor="name" className="block text-black mb-1 font-semibold">
          Name:
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          required
          className="w-full border px-2 py-2 rounded text-black"
          placeholder="Enter name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-black mb-1 font-semibold">
          Email:
        </label>
        <input
          id="email"
          name="email"
          value={formData.email}
          type="email"
          onChange={handleChange}
          className="w-full border px-2 py-2 rounded text-black"
          placeholder="Enter Email"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-black mb-1 font-semibold"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="border w-full rounded px-2 py-2 text-black"
          required
          placeholder="write your message here!"
        />
      </div>
      <div className="text-end">
        <button
          type="submit"
          className="bg-[#38C6C6] rounded px-4 py-2 hover:bg-[#276b6b]"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default InfoForm;
