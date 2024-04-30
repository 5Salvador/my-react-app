import React from 'react'
import maduro14 from '../../assets/maduro14.jpg'

const form = () => {
  return (
    <div className='container'>
        <div className='row justify-content-center'>
          <h1 className='text-black text-center mt-5'>Maduro Empreendimentos</h1>
          <h5>CONTACTE-NOS</h5>
          <p>Maduro.co.mz</p>
          <p className=''>maduro@gmail.in</p>
          <h5>ENVIA-NOS UMA MESSAGEM</h5>
          <p>PARA GARANTIR QUE VOCÊ RECEBA E-MAILS DA MADURO EMPREENDIMENTOS, VERIFIQUE SUA PASTA DE SPAM PARA MENSAGENS DA MADURO EMPREENDIMENTOS.</p>
            <div className='col-md-3 py-4 mt-3 p-4'>
                <img src={maduro14} className="img-fluid" alt="" />

            </div>
            <div className='col-md-6 py-4'>
              <form>
                <div className='mb-3'>
                <label for="u_name" class="form-label text-black">Nome Completo</label>
                <input type="text" class="form-control" id="u_name" />
                </div>
                <div className='mb-3'>
                <label for="u_email" class="form-label text-black">Email</label>
                <input type="text" class="form-control " id="u_email" />
                </div>
                <div className='mb-3'>
                <label for="u_number" class="form-label text-black">Numero</label>
                <input type="text" class="form-control " id="u_number" />
                </div>
                <div className='mb-3'>
                  <label for="u_comment" className='form-label text-black'>Escreva a sua Messagem</label>
                  <textarea id="u_comment" className='form-control' rows="5"></textarea>
                </div>
                <div className='mb-3'>
                  <button type='button' className='btn text-black'>Enviar</button>
                </div>
              
               

              </form>
            </div>
         </div>
      </div>
  )
}

export default form