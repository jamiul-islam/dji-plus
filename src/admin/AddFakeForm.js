import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddNewForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    swal("Success!", "Message sent successfully", "success");
    reset();
  };

  return (
    <div className="py-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        <div className="flex flex-col space-y-4">
          {/* title  */}
          <input
            className="input-primary"
            placeholder="Drone Title"
            {...register("title", { required: true })}
          />
          {/* description  */}
          <textarea
            cols="30"
            rows="9"
            className="input-primary resize-none"
            placeholder="Drone Description"
            {...register("description", { required: true })}
          ></textarea>
        </div>

        <div className="flex flex-col space-y-4">
          {/* Image URL  */}
          <input
            className="input-primary"
            placeholder="Image Link"
            {...register("image", { required: true })}
          />
          {/* duration  */}
          <input
            className="input-primary"
            placeholder="Flight Duration"
            {...register("duration", { required: true })}
          />
          {/* group members  */}
          <input
            type="number"
            className="input-primary"
            placeholder="Max numbers of people it can capture"
            {...register("groupMembers", { required: true })}
          />
          {/* price  */}
          <input
            type="number"
            className="input-primary"
            placeholder="Price"
            {...register("price", { required: true })}
          />
          {/* country  */}
          <input
            type="text"
            className="input-primary"
            placeholder="Country Name"
            {...register("country", { required: true })}
          />
          <button className="btn-primary w-36 ml-auto">Launch</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewForm;
