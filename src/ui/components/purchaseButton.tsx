"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

const PurchaseModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const modalRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  const openPurchaseModal = () => {
    setOpenModal(true);
  };

  const closePurchaseModal = useCallback(() => {
    gsap.to(modalRef.current, {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        setOpenModal(false);
        // Reset form fields on modal close
        setName("");
        setEmail("");
        setPhone("");
      },
    });

    // Fade out animation for the backdrop
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [modalRef, setOpenModal, setName, setEmail, setPhone]);

  const handlePurchase = () => {
    // Add your purchase logic here
    // For example, send form data to the server
    console.log("Purchase submitted:", { name, email, phone });
    // Close the modal after handling the purchase
    closePurchaseModal();
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closePurchaseModal();
    }
  }, [closePurchaseModal]);

  

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Initial slide-in animation
    if (openModal) {
      gsap.fromTo(
        modalRef.current,
        { y: "100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
    }

    // Initial fade-in animation
    if (openModal) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 0.75, duration: 0.5, ease: "power2.inOut" }
      );
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal, handleClickOutside]);

  return (
    <>
      <button
        onClick={openPurchaseModal}
        className="mb-3 mt-4 inline-flex h-12 w-full items-center justify-center rounded bg-zinc-950 px-6 font-medium tracking-wide text-zinc-100 shadow-md transition hover:bg-zinc-900 focus:outline-none"
      >
        Purchase
      </button>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            ref={backdropRef}
            className="absolute inset-0 bg-zinc-800 dark:bg-zinc-600"
          ></div>
          <div
            ref={modalRef}
            className="z-50 bg-white dark:bg-zinc-800 p-8 rounded-lg max-w-md w-full sm:w-96 relative"
          >
            {/* <button
              onClick={closePurchaseModal}
              className="absolute top-0 right-0 m-4 text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
            </button> */}
            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">
              Purchase this Item
            </h2>
            <div className="space-y-4">
              <label
                htmlFor="name"
                className="block text-zinc-700 dark:text-zinc-400"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-md p-2"
              />

              <label
                htmlFor="email"
                className="block text-zinc-700 dark:text-zinc-400"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md p-2"
              />

              <label
                htmlFor="phone"
                className="block text-zinc-700 dark:text-zinc-400"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-md p-2"
              />

              <button
                onClick={handlePurchase}
                className="w-full bg-zinc-950 text-white rounded-md p-2 hover:bg-zinc-900"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PurchaseModal;
