'use client';
import Error from "next/error";

export default function NotFound() {
  return <Error statusCode={404} title="page Not Found 404" />
}