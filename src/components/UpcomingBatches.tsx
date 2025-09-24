"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Tv } from "lucide-react";

type CourseName = "Graphic Designing" | "Video Editing" | "Digital Marketing";

type Batch = {
  day: string;
  title: string;
  start: string;
  time: string;
  mode: string;
};

const batchData: Record<CourseName, Batch[]> = {
  "Graphic Designing": [
    {
      day: "Weekday",
      title: "Graphic Design - Morning",
      start: "Next Monday",
      time: "11:00 AM",
      mode: "Offline & Online",
    },
    {
      day: "Weekend",
      title: "Graphic Design - Weekend",
      start: "Next Saturday",
      time: "04:00 PM",
      mode: "Online Only",
    },
    {
      day: "Weekday",
      title: "Graphic Design - Evening",
      start: "Next Tuesday",
      time: "06:00 PM",
      mode: "Offline & Online",
    },
  ],
  "Video Editing": [
    {
      day: "Weekday",
      title: "Video Editing - Morning",
      start: "Next Monday",
      time: "10:00 AM",
      mode: "Offline & Online",
    },
    {
      day: "Weekend",
      title: "Video Editing - Weekend",
      start: "Next Saturday",
      time: "05:00 PM",
      mode: "Offline Only",
    },
  ],
  "Digital Marketing": [
    {
      day: "Weekday",
      title: "Digital Marketing - Morning",
      start: "Next Wednesday",
      time: "09:00 AM",
      mode: "Online Only",
    },
    {
      day: "Weekend",
      title: "Digital Marketing - Weekend",
      start: "Next Sunday",
      time: "06:00 PM",
      mode: "Offline & Online",
    },
  ],
};

const UpcomingBatches = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
            Upcoming <span className="text-gradient">Batches</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your desired course and join our upcoming batch to kickstart
            your creative journey.
          </p>
        </div>

        <Tabs defaultValue="Graphic Designing" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto h-auto">
            <TabsTrigger value="Graphic Designing">
              Graphic Designing
            </TabsTrigger>
            <TabsTrigger value="Video Editing">Video Editing</TabsTrigger>
            <TabsTrigger value="Digital Marketing">
              Digital Marketing
            </TabsTrigger>
          </TabsList>

          {Object.keys(batchData).map((course) => (
            <TabsContent key={course} value={course}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {batchData[course as CourseName].map((batch, idx) => (
                  <Card
                    key={idx}
                    className="card-modern p-6 text-left group animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <CardHeader className="p-0">
                      <div className="flex justify-between items-center mb-4">
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                          {batch.title}
                        </CardTitle>
                        <div className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {batch.day}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>
                          <strong>Batch Start:</strong> {batch.start}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>
                          <strong>Time:</strong> {batch.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Tv className="w-4 h-4 text-primary" />
                        <span>
                          <strong>Mode:</strong> {batch.mode}
                        </span>
                      </div>
                      <Button className="w-full mt-4 btn-secondary">
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UpcomingBatches;
