"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { Button } from "flowbite-react";

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

        setName("");
        setEmail("");
        setPhone("");
      },
    });

    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [modalRef, setOpenModal, setName, setEmail, setPhone]);

  const handlePurchase = () => {
    console.log("Purchase submitted:", { name, email, phone });

    closePurchaseModal();
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closePurchaseModal();
      }
    },
    [closePurchaseModal]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    if (openModal) {
      gsap.fromTo(
        modalRef.current,
        { y: "100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
    }

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
      <Button
        onClick={openPurchaseModal}
        color="dark"
        className="mx-auto text-lime-400 bg-zinc-800 enabled:hover:bg-zinc-900 focus:ring-zinc-300 dark:bg-zinc-800 dark:enabled:hover:bg-zinc-700 dark:focus:ring-zinc-800 dark:border-zinc-700 theme-transition"
      >
        Purchase
      </Button>

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
