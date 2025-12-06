import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { toast } from 'react-toastify'
import '../assets/css/ContactForm.scss'

const ContactForm = () => {
  const { control, handleSubmit, formState: { errors }, reset, watch } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      description: '',
      image: null,
    },
    mode: 'onChange'
  })

  const [imagePreview, setImagePreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const watchImage = watch('image')

  // Валідація імені
  const validateName = (value) => {
    if (!value) return 'Ім\'я обов\'язкове'
    if (value.length < 2) return 'Ім\'я мінімум 2 символи'
    if (value.length > 50) return 'Ім\'я максимум 50 символів'
    return true
  }

  // Валідація email
  const validateEmail = (value) => {
    if (!value) return 'Email обов\'язковий'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) return 'Введіть корректний email'
    return true
  }

  // Валідація телефону
  const validatePhone = (value) => {
    if (!value) return 'Номер телефону обов\'язковий'
    const phoneRegex = /^[\d+\-\s()]{10,}$/
    if (!phoneRegex.test(value.replace(/\s/g, ''))) {
      return 'Введіть корректний номер телефону'
    }
    return true
  }

  // Валідація опису
  const validateDescription = (value) => {
    if (!value) return 'Опис іграшки обов\'язковий'
    if (value.length < 10) return 'Опис мінімум 10 символів'
    if (value.length > 1000) return 'Опис максимум 1000 символів'
    return true
  }

  // Валідація зображення
  const validateImage = (files) => {
    if (!files || files.length === 0) return 'Будь ласка, завантажте ескіз'
    
    const file = files[0]
    const maxSize = 5 * 1024 * 1024 // 5MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

    if (!allowedTypes.includes(file.type)) {
      return 'Допустимі формати: JPG, PNG, WebP, GIF'
    }

    if (file.size > maxSize) {
      return 'Розмір файлу не повинен перевищувати 5MB'
    }

    return true
  }

  // Обробка зміни зображення
  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // Обробка відправлення форми
  const onSubmit = async (data) => {
    setLoading(true)
    
    try {
      // Імітація відправлення даних (затримка 1 сек)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Тут можна зберегти дані, наприклад у localStorage для демонстрації
      const formData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        description: data.description,
        image: {
          name: data.image[0].name,
          size: data.image[0].size,
          type: data.image[0].type,
          preview: imagePreview
        },
        timestamp: new Date().toISOString()
      }

      // Зберігаємо в localStorage
      const existingOrders = JSON.parse(localStorage.getItem('customToyOrders') || '[]')
      existingOrders.push(formData)
      localStorage.setItem('customToyOrders', JSON.stringify(existingOrders))

      // Показуємо toast повідомлення
      toast.success('✓ Заявку успішно отримано! Ми скоро з вами зв\'яжемося', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })

      // Очищаємо форму
      reset()
      setImagePreview(null)
    } catch (error) {
      toast.error('❌ Помилка при відправленні. Спробуйте ще раз', {
        position: 'top-right',
        autoClose: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  const removeImage = () => {
    setImagePreview(null)
  }

  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <div className="container">
        <h2 className="form-title">Замовити персональну іграшку</h2>
        <p className="form-subtitle">Заповніть форму, і наша команда створить вашу унікальну іграшку</p>

        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          {/* Поле імені */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Ваше ім'я <span className="required">*</span>
            </label>
            <Controller
              name="name"
              control={control}
              rules={{ validate: validateName }}
              render={({ field }) => (
                <input
                  {...field}
                  id="name"
                  type="text"
                  placeholder="Введіть ваше ім'я"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                />
              )}
            />
            {errors.name && <span className="error-message">{errors.name.message}</span>}
          </div>

          {/* Поле email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email <span className="required">*</span>
            </label>
            <Controller
              name="email"
              control={control}
              rules={{ validate: validateEmail }}
              render={({ field }) => (
                <input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                />
              )}
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>

          {/* Поле телефону */}
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Номер телефону <span className="required">*</span>
            </label>
            <Controller
              name="phone"
              control={control}
              rules={{ validate: validatePhone }}
              render={({ field }) => (
                <InputMask
                  {...field}
                  id="phone"
                  mask="+38 (999) 999-99-99"
                  maskChar={null}
                  placeholder="+38 (___) ___-__-__"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                />
              )}
            />
            {errors.phone && <span className="error-message">{errors.phone.message}</span>}
          </div>

          {/* Поле опису */}
          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Опис вашої іграшки <span className="required">*</span>
            </label>
            <Controller
              name="description"
              control={control}
              rules={{ validate: validateDescription }}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="description"
                  placeholder="Опишіть, якою ви бачите свою персональну іграшку..."
                  className={`form-textarea ${errors.description ? 'error' : ''}`}
                  rows="5"
                />
              )}
            />
            <div className="char-count">
              {watch('description').length}/1000
            </div>
            {errors.description && <span className="error-message">{errors.description.message}</span>}
          </div>

          {/* Поле завантаження зображення */}
          <div className="form-group">
            <label htmlFor="image" className="form-label">
              Ескіз або riferimento зображення <span className="required">*</span>
            </label>
            <Controller
              name="image"
              control={control}
              rules={{ validate: validateImage }}
              render={({ field: { onChange } }) => (
                <div className="file-upload-wrapper">
                  <input
                    id="image"
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    onChange={(e) => {
                      onChange(e.target.files)
                      handleImageChange(e)
                    }}
                    className="file-input"
                  />
                  <label htmlFor="image" className="file-upload-label">
                    <div className="upload-icon">📁</div>
                    <div className="upload-text">
                      <p className="upload-title">Натисніть або перетягніть файл</p>
                      <p className="upload-subtitle">JPG, PNG, WebP, GIF до 5MB</p>
                    </div>
                  </label>

                  {imagePreview && (
                    <div className="image-preview-wrapper">
                      <div className="image-preview">
                        <img src={imagePreview} alt="Preview" />
                        <button
                          type="button"
                          className="remove-image-btn"
                          onClick={removeImage}
                        >
                          ✕
                        </button>
                      </div>
                      <p className="preview-filename">
                        {watchImage?.[0]?.name}
                      </p>
                    </div>
                  )}
                </div>
              )}
            />
            {errors.image && <span className="error-message">{errors.image.message}</span>}
          </div>

          {/* Кнопка відправлення */}
          <button
            type="submit"
            disabled={loading}
            className={`submit-button ${loading ? 'loading' : ''}`}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Відправлення...
              </>
            ) : (
              '✓ Відправити заявку'
            )}
          </button>

          <p className="form-note">
            Ми не будемо передавати ваші дані третім особам. Ознайомтесь із нашою політикою конфіденційності.
          </p>
        </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm