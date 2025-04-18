
import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  date: Date;
  time: string;
  details: string;
}

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<BookingFormData>();
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date>();

  const onSubmit = async (data: BookingFormData) => {
    try {
      const { error } = await supabase.functions.invoke('send-email', {
        body: {
          name: data.name,
          email: data.email,
          subject: `New Booking Request - ${data.serviceType}`,
          message: `
            Name: ${data.name}
            Email: ${data.email}
            Phone: ${data.phone}
            Service: ${data.serviceType}
            Date: ${format(data.date, 'PPP')}
            Time: ${data.time}
            Additional Details: ${data.details}
          `
        }
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your booking request has been sent. We'll contact you soon.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send booking request. Please try again.",
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-4">Book a Session</h1>
      <p className="text-muted-foreground text-center mb-8">
        Ready to capture your special moments? Fill out the form below to book a photography or videography session with us.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Your Name *</label>
          <Input {...register("name", { required: true })} />
          {errors.name && <span className="text-red-500 text-sm">Required</span>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email Address *</label>
          <Input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span className="text-red-500 text-sm">Valid email required</span>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Phone Number *</label>
          <Input {...register("phone", { required: true })} />
          {errors.phone && <span className="text-red-500 text-sm">Required</span>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Service Type *</label>
          <Select onValueChange={(value) => setValue("serviceType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding">Wedding Photography</SelectItem>
              <SelectItem value="portrait">Portrait Session</SelectItem>
              <SelectItem value="commercial">Commercial Photography</SelectItem>
              <SelectItem value="event">Event Coverage</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Select Date *</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => {
                  setDate(date);
                  date && setValue("date", date);
                }}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Select Time *</label>
          <Select onValueChange={(value) => setValue("time", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a time slot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9:00">9:00 AM</SelectItem>
              <SelectItem value="10:00">10:00 AM</SelectItem>
              <SelectItem value="11:00">11:00 AM</SelectItem>
              <SelectItem value="13:00">1:00 PM</SelectItem>
              <SelectItem value="14:00">2:00 PM</SelectItem>
              <SelectItem value="15:00">3:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-2 space-y-2">
          <label className="text-sm font-medium">Additional Details</label>
          <Textarea
            {...register("details")}
            placeholder="Tell us more about your event or requirements..."
            className="h-32"
          />
        </div>

        <div className="col-span-2">
          <Button type="submit" className="w-full">Book Appointment</Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
