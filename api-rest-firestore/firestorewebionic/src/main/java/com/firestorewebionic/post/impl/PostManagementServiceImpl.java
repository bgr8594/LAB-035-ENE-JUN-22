package com.firestorewebionic.post.impl;

import com.firestorewebionic.post.firebase.FirebaseInitializer;
import com.firestorewebionic.post.service.PostManagementService;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import dto.PostDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@Service
public class PostManagementServiceImpl implements PostManagementService {

    @Autowired
    private FirebaseInitializer firebase;

    @Override
    public List<PostDTO> list() {
        List<PostDTO> response = new ArrayList<PostDTO>();;
        PostDTO post = new PostDTO();
        ApiFuture<QuerySnapshot> writeResultApiFuture = getCollection().get();
        try {
            for(DocumentSnapshot doc: writeResultApiFuture.get().getDocuments()){
                post = doc.toObject(PostDTO.class);
                post.setId(doc.getId());
                response.add(post);
            }
            System.out.println("Documentos consultados: "+post.toString());
            return response;
        } catch (InterruptedException e) {
            e.printStackTrace();
            return null;
        }
        catch (ExecutionException e) {
            e.printStackTrace();
            return null;
        }

    }

    @Override
    public Boolean add(PostDTO postDTO) {
        Map<String, Object> docData = getDocData(postDTO);
        ApiFuture<WriteResult> writeResultApiFuture = getCollection().document().create(docData);

        if(null != writeResultApiFuture){
            System.out.println("Se agrego documento "+postDTO.toString());
            return Boolean.TRUE;
        }

        return null;
    }

    @Override
    public Boolean edit(String id, PostDTO postDTO) {
        Map<String, Object> docData = getDocData(postDTO);
        ApiFuture<WriteResult> writeResultApiFuture = getCollection().document(id).set(docData);
        if(null != writeResultApiFuture){
            System.out.println("Se edito documento con id: "+id+", documento: "+postDTO.toString());
            return Boolean.TRUE;
        }
        return Boolean.FALSE;

    }

    @Override
    public Boolean delete(String id) {
        ApiFuture<WriteResult> writeResultApiFuture = getCollection().document(id).delete();
        if(null != writeResultApiFuture){
            System.out.println("Se borro documento con id: "+id);
            return Boolean.TRUE;
        }
        return Boolean.FALSE;
    }

    private CollectionReference getCollection() {
        return firebase.getFirestore().collection("lugar");
    }

    private Map<String, Object> getDocData(PostDTO postDTO) {
        Map<String , Object> docData = new HashMap<String , Object>();
        docData.put("nombre", postDTO.getNombre());
        docData.put("latitud", postDTO.getLatitud());
        docData.put("longitud", postDTO.getLongitud());
        return docData;
    }
}
