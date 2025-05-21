"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    jobSeekers: 45,
    employers: 12,
  },
  {
    name: "Feb",
    jobSeekers: 52,
    employers: 18,
  },
  {
    name: "Mar",
    jobSeekers: 61,
    employers: 24,
  },
  {
    name: "Apr",
    jobSeekers: 67,
    employers: 28,
  },
  {
    name: "May",
    jobSeekers: 81,
    employers: 32,
  },
  {
    name: "Jun",
    jobSeekers: 98,
    employers: 38,
  },
  {
    name: "Jul",
    jobSeekers: 87,
    employers: 35,
  },
  {
    name: "Aug",
    jobSeekers: 105,
    employers: 42,
  },
  {
    name: "Sep",
    jobSeekers: 118,
    employers: 48,
  },
  {
    name: "Oct",
    jobSeekers: 124,
    employers: 51,
  },
  {
    name: "Nov",
    jobSeekers: 131,
    employers: 55,
  },
  {
    name: "Dec",
    jobSeekers: 142,
    employers: 61,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="jobSeekers" fill="#8884d8" radius={[4, 4, 0, 0]} name="Job Seekers" />
        <Bar dataKey="employers" fill="#82ca9d" radius={[4, 4, 0, 0]} name="Employers" />
      </BarChart>
    </ResponsiveContainer>
  )
}
