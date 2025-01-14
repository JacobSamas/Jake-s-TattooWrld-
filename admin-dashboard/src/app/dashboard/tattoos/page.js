"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "@/components/Modal";

export default function TattooManagementPage() {
  const [tattoos, setTattoos] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [error, setError] = useState("");

  const fetchTattoos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/admin/tattoos",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setTattoos(response.data);
    } catch (err) {
      setError("Failed to fetch tattoos. Please try again.");
    }
  };

  useEffect(() => {
    fetchTattoos();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = (tattoo = null) => {
    if (tattoo) {
      setFormData({
        title: tattoo.title,
        description: tattoo.description,
        price: tattoo.price,
        imageUrl: tattoo.imageUrl,
      });
      setIsEditing(true);
      setEditId(tattoo.id);
    } else {
      setFormData({ title: "", description: "", price: "", imageUrl: "" });
      setIsEditing(false);
      setEditId(null);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ title: "", description: "", price: "", imageUrl: "" });
    setIsEditing(false);
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(
          `http://localhost:5001/api/admin/tattoos/${editId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } else {
        await axios.post("http://localhost:5001/api/admin/tattoos", formData, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
      }
      closeModal();
      fetchTattoos();
    } catch (err) {
      setError("Failed to save tattoo. Please try again.");
    }
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5001/api/admin/tattoos/${deleteId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setDeleteId(null);
      fetchTattoos();
    } catch (err) {
      setError("Failed to delete tattoo. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Tattoos</h1>
      {error && <p className="text-red-500">{error}</p>}

      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-6"
        onClick={() => openModal()}
      >
        Add New Tattoo
      </button>

      {/* Tattoo List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {tattoos.map((tattoo) => (
          <div key={tattoo.id} className="p-4 bg-white shadow-md rounded">
            <img
              src={tattoo.imageUrl}
              alt={tattoo.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-bold">{tattoo.title}</h3>
            <p className="text-sm text-gray-600">{tattoo.description}</p>
            <p className="text-sm text-gray-800 font-bold">${tattoo.price}</p>
            <div className="mt-4 flex gap-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => openModal(tattoo)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => confirmDelete(tattoo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">
          {isEditing ? "Edit Tattoo" : "Add New Tattoo"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {isEditing ? "Update Tattoo" : "Add Tattoo"}
          </button>
        </form>
      </Modal>

      {/* Confirmation Modal */}
      <Modal isOpen={!!deleteId} onClose={() => setDeleteId(null)}>
        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-4">Are you sure you want to delete this tattoo?</p>
        <div className="flex gap-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleDelete}
          >
            Yes, Delete
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            onClick={() => setDeleteId(null)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
