import React from "react";
import {
  FormNavigation,
  SubmitButton,
  Modal,
  ErrorMessage,
} from "../../components";
const MessageFormSyntax = ({
  contact,
  email,
  watch,
  handleSubmit,
  sendMessage,
  register,
  errors,
  createMessageMutation,
}) => {
  return (
    <Modal>
      <div className="form-wrap ">
        <FormNavigation text="Message Form" />
        <form className="form-styling" onSubmit={handleSubmit(sendMessage)}>
          {/* FILE */}
          <div className={`${contact && "hidden"} input-wrap`}>
            <label htmlFor="recipient" className="w-full ">
              Recipient
            </label>
            <select
              className="input-styling capitalize mb-5"
              {...register("recipient", {
                required: "This field is required ",
              })}
            >
              <option className="capitalize" value="all-admins">
                All Admins
              </option>
              <option className="capitalize" value="all-tutors">
                All Tutors
              </option>
              <option className="capitalize" value="all-students">
                All Students
              </option>
              <option className="capitalize" value="other">
                Other
              </option>
            </select>
            {errors.recipient && (
              <ErrorMessage message={errors.recipient?.message} />
            )}
          </div>
          {watch("recipient") === "other" ||
            (contact && (
              <>
                <div className="input-wrap">
                  <div className="flex phone:gap-3 tablet:gap-2">
                    <input
                      className="input-styling w-16"
                      type="Text"
                      required
                      value="+254"
                      readOnly
                    />
                    <input
                      className="input-styling phone:w-52  tablet:w-72"
                      placeholder="Enter Safaricom No."
                      readOnly={contact ? true : false}
                      {...register("contact", {
                        required: "This field is required ",
                      })}
                    />
                  </div>

                  {errors.contact && (
                    <ErrorMessage message={errors.contact?.message} />
                  )}
                </div>
                <div className="input-wrap">
                  <label htmlFor="email">Email</label>
                  <input
                    className="input-styling"
                    placeholder="E-mail Address"
                    readOnly={email ? true : false}
                    type="email"
                    {...register("email", {
                      required: "This field is required ",
                    })}
                  />
                  {errors.email && (
                    <ErrorMessage message={errors.email?.message} />
                  )}
                </div>
              </>
            ))}

          <div className="input-wrap">
            <label htmlFor="cNumber" className="w-full ">
              Message
            </label>
            <textarea
              placeholder="Description"
              {...register("message", {
                required: "This field is required ",
              })}
            ></textarea>
            <p className="text-xs">
              Character count :{" "}
              <span className="text-xs text-slate-600">
                {watch("message").length}
              </span>
            </p>
            {errors.message && (
              <ErrorMessage message={errors.message?.message} />
            )}
          </div>

          <div className="cta-wrap">
            <div
              className={`flex flex-row gap-5 items-center"
              `}
            >
              <SubmitButton
                type="submit"
                isSubmitting={createMessageMutation.isLoading}
                disabled={
                  watch("contact") !== "" || watch("message") !== ""
                    ? false
                    : true
                }
                text={createMessageMutation.isLoading ? "Sending" : "Send"}
              />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default MessageFormSyntax;
