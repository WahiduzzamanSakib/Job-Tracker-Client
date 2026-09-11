
"use client";

import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextArea, TextField } from "@heroui/react";


function Jobadd() {
    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        console.log(data);
        window.location.reload();
    };

    return (
        <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
            <div
                className="mx-auto w-full max-w-4xl rounded-2xl border border-blue-400/20 bg-blue-950/70 p-5 shadow-2xl shadow-blue-950/30 backdrop-blur-md sm:p-7 lg:p-8"
            >
                <Form className="w-full" onSubmit={onSubmit}>
                    <Fieldset className="w-full">
                        {/* Header */}
                        <div className="mb-6">
                            <Fieldset.Legend className="text-xl font-bold text-white sm:text-2xl">
                                Add Job Application
                            </Fieldset.Legend>

                            <Description className="mt-1 text-sm text-blue-200/80">
                                Keep track of your job applications and interview
                                details.
                            </Description>
                        </div>

                        <FieldGroup className="mt-0">
                            {/* Applied Date + Company Name */}
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <TextField isRequired name="appliedDate">
                                    <Label className="text-blue-100">
                                        Applied Date
                                    </Label>

                                    <Input
                                        type="date"
                                        className="
                                            text-black
                                            [&_input]:text-black
                                            [&_input]:placeholder:text-blue-300/50
                                        "
                                    />

                                    <FieldError />
                                </TextField>

                                <TextField
                                    isRequired
                                    name="companyName"
                                    validate={(value) => {
                                        if (!value || value.length < 2) {
                                            return "Company name is required";
                                        }

                                        return null;
                                    }}
                                >
                                    <Label className="text-blue-100">
                                        Company Name
                                    </Label>

                                    <Input
                                        placeholder="Google, Microsoft..."
                                        className="
                                            text-black
                                            [&_input]:text-white
                                            [&_input]:placeholder:text-blue-300/50
                                        "
                                    />

                                    <FieldError />
                                </TextField>
                            </div>

                            {/* Position + Job Link */}
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <TextField
                                    isRequired
                                    name="position"
                                    validate={(value) => {
                                        if (!value || value.length < 2) {
                                            return "Job title is required";
                                        }

                                        return null;
                                    }}
                                >
                                    <Label className="text-blue-100">
                                        Position / Job Title
                                    </Label>

                                    <Input
                                        placeholder="Frontend Developer"
                                        className="
                                            text-black
                                            [&_input]:text-white
                                            [&_input]:placeholder:text-blue-300/50
                                        "
                                    />

                                    <FieldError />
                                </TextField>

                                <TextField name="jobLink">
                                    <Label className="text-blue-100">
                                        Job Link
                                    </Label>

                                    <Input
                                        type="url"
                                        placeholder="https://company.com/jobs/..."
                                        className="
                                            text-black
                                            [&_input]:text-white
                                            [&_input]:placeholder:text-blue-300/50
                                        "
                                    />

                                    <FieldError />
                                </TextField>
                            </div>

                            {/* Status + Interview Date */}
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <div className="w-full">
                                    <Label className="mb-2 block text-blue-100">
                                        Status
                                    </Label>

                                    <select
                                        name="status"
                                        defaultValue="Applied"
                                        className="
                                            h-10 w-full
                                            rounded-lg
                                            border border-blue-400/30
                                            bg-blue-900/60
                                            px-3
                                            text-sm text-white
                                            outline-none
                                            transition
                                            focus:border-blue-400
                                            focus:ring-2
                                            focus:ring-blue-400/20
                                        "
                                    >
                                        <option
                                            value="Applied"
                                            className="bg-blue-950"
                                        >
                                            Applied
                                        </option>

                                        <option
                                            value="Screening"
                                            className="bg-blue-950"
                                        >
                                            Screening
                                        </option>

                                        <option
                                            value="Interview"
                                            className="bg-blue-950"
                                        >
                                            Interview
                                        </option>

                                        <option
                                            value="Offer"
                                            className="bg-blue-950"
                                        >
                                            Offer
                                        </option>

                                        <option
                                            value="Rejected"
                                            className="bg-blue-950"
                                        >
                                            Rejected
                                        </option>

                                        <option
                                            value="Withdrawn"
                                            className="bg-blue-950"
                                        >
                                            Withdrawn
                                        </option>
                                    </select>
                                </div>

                                <TextField name="interviewDate">
                                    <Label className="text-blue-100">
                                        Interview Date
                                    </Label>

                                    <Input
                                        type="date"
                                        className="
                                            text-black
                                            [&_input]:text-white
                                        "
                                    />

                                    <FieldError />
                                </TextField>
                            </div>

                            {/* Location + Networking */}
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <div className="w-full">
                                    <Label className="mb-2 block text-blue-100">
                                        Location
                                    </Label>

                                    <select
                                        name="location"
                                        defaultValue=""
                                        className="
                                            h-10 w-full
                                            rounded-lg
                                            border border-blue-400/30
                                            bg-blue-900/60
                                            px-3
                                            text-sm text-white
                                            outline-none
                                            transition
                                            focus:border-blue-400
                                            focus:ring-2
                                            focus:ring-blue-400/20
                                        "
                                    >
                                        <option
                                            value=""
                                            disabled
                                            className="bg-blue-950"
                                        >
                                            Select location
                                        </option>

                                        <option
                                            value="On-site"
                                            className="bg-blue-950"
                                        >
                                            On-site
                                        </option>

                                        <option
                                            value="Remote"
                                            className="bg-blue-950"
                                        >
                                            Remote
                                        </option>

                                        <option
                                            value="Hybrid"
                                            className="bg-blue-950"
                                        >
                                            Hybrid
                                        </option>
                                    </select>
                                </div>

                                <TextField name="networking">
                                    <Label className="text-blue-100">
                                        Networking
                                    </Label>

                                    <Input
                                        placeholder="LinkedIn, referral, friend..."
                                        className="
                                            text-black
                                            [&_input]:text-white
                                            [&_input]:placeholder:text-blue-300/50
                                        "
                                    />

                                    <FieldError />
                                </TextField>
                            </div>

                            {/* Optional Note */}
                            <TextField name="note">
                                <Label className="text-blue-100">
                                    Note
                                </Label>

                                <TextArea
                                    placeholder="Write any additional notes..."
                                    rows={4}
                                    className="
                                        text-black
                                        [&_textarea]:text-white
                                        [&_textarea]:placeholder:text-blue-300/50
                                    "
                                />

                                <Description className="text-blue-300/70">
                                    Optional. You can add anything you want to
                                    remember.
                                </Description>

                                <FieldError />
                            </TextField>
                        </FieldGroup>

                        {/* Action */}
                        <Fieldset.Actions className="mt-7">
                            <Button
                                type="submit"
                                className="
                                    w-full
                                    bg-blue-500
                                    font-semibold
                                    text-white
                                    shadow-lg
                                    shadow-blue-500/20
                                    transition
                                    hover:bg-blue-400
                                    sm:w-auto
                                "
                            >
                                Add Application
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
            </div>
        </div>
    );
}

export default Jobadd;

